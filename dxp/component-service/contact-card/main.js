// Utility function to render raw HTML without extra parsing
import { html } from '../../utils/html';
// Sanitizes dynamic content to prevent XSS attacks
import { xssSafeContent } from '../../utils/xss';

// This module takes an object with contact information properties as input.
export default {
  async main({
    name,
    title,
    email,
    phone,
    image,
    socialLinks,
    showSocialLinks
  }) {
    // Generate a unique ID for each contact card instance
    const uniqueId = `contact-card-${Math.floor(Math.random() * 9999)}`;

    // Generate social links HTML if they exist and should be shown
    let socialLinksHTML = '';
    if (showSocialLinks && socialLinks && socialLinks.length > 0) {
      const socialItems = socialLinks
        .map(
          (link) => `
        <a href="${link.url}" class="contact-card__social-link" target="_blank" rel="noopener noreferrer" aria-label="${link.platform}">
          <span class="contact-card__social-icon contact-card__social-icon--${link.platform.toLowerCase()}">
            ${link.platform}
          </span>
        </a>
      `
        )
        .join('');

      socialLinksHTML = `
        <div class="contact-card__social-links">
          ${socialItems}
        </div>
      `;
    }

    // Generate contact info HTML
    const contactInfoHTML = `
      <div class="contact-card__contact-info">
        ${email ? `<a href="mailto:${email}" class="contact-card__contact-item contact-card__email" data-sq-field="email">${xssSafeContent(email)}</a>` : ''}
        ${phone ? `<a href="tel:${phone}" class="contact-card__contact-item contact-card__phone" data-sq-field="phone">${xssSafeContent(phone)}</a>` : ''}
      </div>
    `;

    // Generate profile image HTML
    const profileImageHTML = image
      ? `<img data-sq-field="image" src="${image.imageVariations.original.url}" alt="${image.alt || name}" class="contact-card__image" />`
      : `<div class="contact-card__image contact-card__image--placeholder">
          <span class="contact-card__initials">${name ? name.charAt(0).toUpperCase() : 'U'}</span>
         </div>`;

    return html`
      <div class="contact-card" id="${uniqueId}">
        <div class="contact-card__header">${profileImageHTML}</div>

        <div class="contact-card__content">
          <h3 data-sq-field="name" class="contact-card__name">
            ${xssSafeContent(name)}
          </h3>

          ${title
            ? `<p data-sq-field="title" class="contact-card__title">${xssSafeContent(title)}</p>`
            : ''}
          ${email || phone ? contactInfoHTML : ''} ${socialLinksHTML}
        </div>
      </div>
    `;
  }
};
