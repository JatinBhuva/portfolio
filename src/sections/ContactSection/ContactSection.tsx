import { useState } from 'react'
import { Button } from '../../components/Button/Button'
import { Container } from '../../components/Container/Container'
import { Icon } from '../../components/Icon/Icon'
import { portfolio } from '../../data/portfolio'
import styles from './ContactSection.module.css'

export function ContactSection() {
  const { contact } = portfolio
  const mailto = `mailto:${contact.email}`
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'sent' | 'error' | 'fallback'
  >('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const openMailAppFallback = () => {
    if (typeof window === 'undefined') return

    const subject = `Portfolio inquiry from ${name}`
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      '',
      'Description:',
      description,
      '',
      `Sent from: ${window.location.href}`,
    ].join('\n')

    const mailtoUrl = `mailto:${contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`

    try {
      window.location.assign(mailtoUrl)
    } catch {
      // ignore
    }
  }

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    if (!form.reportValidity()) return

    if (typeof window === 'undefined') return

    setStatus('sending')
    setErrorMessage(null)

    const emailjs = contact.emailjs
    if (emailjs) {
      try {
        const formData = new FormData(form)
        formData.append('service_id', emailjs.serviceId)
        formData.append('template_id', emailjs.templateId)
        formData.append('user_id', emailjs.publicKey)

        // Extra context for templates (optional).
        formData.append('page_url', window.location.href)

        const response = await fetch(
          'https://api.emailjs.com/api/v1.0/email/send-form',
          {
            method: 'POST',
            body: formData,
          },
        )

        if (!response.ok) {
          const text = await response.text()
          const normalized = (text || '').toLowerCase()
          const isInvalidGrant =
            normalized.includes('invalid grant') ||
            normalized.includes('invalid_grant') ||
            normalized.includes('gmail_api')

          if (isInvalidGrant) {
            setStatus('fallback')
            openMailAppFallback()
            return
          }

          throw new Error(text || `Request failed (${response.status})`)
        }

        setStatus('sent')
        setName('')
        setEmail('')
        setDescription('')

        window.setTimeout(() => setStatus('idle'), 3500)
        return
      } catch (error) {
        setStatus('error')
        setErrorMessage(
          error instanceof Error ? error.message : 'Failed to send message.',
        )
        return
      }
    }

    setStatus('fallback')
    openMailAppFallback()
    setStatus('idle')
  }

  return (
    <section className={styles.section} id="contact">
      <Container>
        <div className={styles.card}>
          <div className={styles.glow} aria-hidden />
          <div className={styles.inner}>
            <div className={styles.layout}>
              <div className={styles.left}>
                <span className={styles.badge}>AVAILABLE FOR PROJECTS</span>
                <h2 className={styles.title}>{contact.title}</h2>
                <p className={styles.description}>{contact.description}</p>

                <div className={styles.actions}>
                  <Button
                    className={styles.emailButton}
                    href={mailto}
                    size="lg"
                    variant="primary"
                  >
                    {contact.email}
                  </Button>
                  <div className={styles.iconLinks} aria-label="Social links">
                    {contact.links.map((link) => (
                      <a
                        key={link.label}
                        aria-label={link.label}
                        className={styles.iconButton}
                        href={link.href}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <Icon aria-hidden name={link.icon} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <form className={styles.form} onSubmit={submit}>
                <div className={styles.fieldGrid}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="contactName">
                      Name
                    </label>
                    <input
                      autoComplete="name"
                      className={styles.input}
                      id="contactName"
                      name="user_name"
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      required
                      value={name}
                    />
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="contactEmail">
                      Email
                    </label>
                    <input
                      autoComplete="email"
                      className={styles.input}
                      id="contactEmail"
                      name="user_email"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      required
                      type="email"
                      value={email}
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="contactDescription">
                    Description
                  </label>
                  <textarea
                    className={styles.textarea}
                    id="contactDescription"
                    name="message"
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Tell me what you want to build, goals, timeline, and any key constraints…"
                    required
                    rows={7}
                    value={description}
                  />
                </div>

                <div className={styles.formFooter}>
                  {status === 'sending' ? (
                    <p className={styles.note} data-variant="info" role="status">
                      Sending…
                    </p>
                  ) : null}

                  {status === 'sent' || status === 'error' || status === 'fallback' ? (
                    <p
                      className={styles.note}
                      data-variant={
                        status === 'sent' ? 'success' : status === 'error' ? 'error' : 'info'
                      }
                      role={status === 'error' ? 'alert' : status === 'fallback' ? 'status' : undefined}
                    >
                      {status === 'sent'
                        ? 'Message sent successfully.'
                        : status === 'fallback'
                          ? 'Email service is temporarily unavailable. Opening your email app instead.'
                          : errorMessage ?? 'Failed to send message.'}
                    </p>
                  ) : null}
                  <Button
                    disabled={status === 'sending'}
                    rightIcon="send"
                    size="lg"
                    type="submit"
                    variant="primary"
                  >
                    {status === 'sending' ? 'Sending…' : 'Transmit message'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
