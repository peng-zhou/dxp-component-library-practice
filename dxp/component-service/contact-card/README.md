<img width="392" height="516" alt="Screenshot 2025-10-17 at 11 31 31 am" src="https://github.com/user-attachments/assets/d2fde2bf-d406-42a7-bf05-06b830b3ba33" />

# Contact Card

## Description

The Contact Card component displays professional contact information including profile image, name, job title, contact details, and optional social media links. It provides a clean, modern layout with hover effects and responsive design.

## Editing

Users can customize the Contact Card component by providing contact information and configuring social media links. The component supports profile images with automatic fallback to initials, clickable email and phone links, and up to 6 social media platforms (LinkedIn, Twitter, Facebook, Instagram, GitHub, Website).

## Properties Example:

```
{
  "name": "Peter Parker",
  "title": "Product Manager",
  "email": "peter.parker@example.com",
  "phone": "+1 (555) 123-4567",
  "image": {
    "name": "Peter Parker Profile",
    "alt": "Profile photo of Peter Parker",
    "imageVariations": {
      "original": {
        "url": "https://picsum.photos/200/200?random=1",
        "width": 200,
        "height": 200,
        "byteSize": 15000,
        "mimeType": "image/jpeg",
        "aspectRatio": "1:1",
        "sha1Hash": "1234567890abcdef1234567890abcdef12345678"
      }
    }
  },
  "showSocialLinks": true,
  "socialLinks": [
    {
      "platform": "LinkedIn",
      "url": "https://linkedin.com/in/test"
    },
    {
      "platform": "Website",
      "url": "https://test.com"
    }
  ]
}
```

## Component Properties

| Property        | Property Description                           |    Property Type    | Is Required | Default |
| :-------------- | :--------------------------------------------- | :-----------------: | :---------: | :-----: |
| name            | Person's full name                             |       string        |      ✓      |         |
| title           | Job title or role                              |       string        |             |         |
| email           | Email address (creates clickable mailto link)  |       string        |             |         |
| phone           | Phone number (creates clickable tel link)      |       string        |             |         |
| image           | Profile photo (shows initials if not provided) | object (SquizImage) |             |         |
| showSocialLinks | Enable/disable social media links              |       boolean       |             |  false  |
| socialLinks     | Array of social media profiles                 |        array        |             |         |
| platform        | Social media platform name                     |       string        |      ✓      |         |
| url             | URL to the social media profile                |       string        |      ✓      |         |
