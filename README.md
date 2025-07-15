# AI Marketing Campaign

This project manages a marketing campaign targeting **JDM car enthusiasts** in the U.S. market. We automate content distribution across **TikTok**, **Instagram**, and **Google Ads** using workflow tools like **openrouter** and **n8n**. The website itself is built on top of [Notus NextJS](https://github.com/creativetimofficial/notus-nextjs) and has been customized for our campaign.

## Repository Structure

 - `AGENTS.md` – instructions for automated agents running campaign tasks.
 - `scripts/` – optional automation scripts.
 - `Legacy_System_Integration_Architecture.md` – event-driven approach for connecting legacy inventory systems.

## Requirements

- [openrouter](https://openrouter.ai/) for AI-powered routing.
- [n8n](https://n8n.io/) to orchestrate workflows.

## Getting Started

1. Clone this repository.
2. Review the agent instructions in [`AGENTS.md`](AGENTS.md).
3. Read [`Legacy_System_Integration_Architecture.md`](Legacy_System_Integration_Architecture.md) for details on integrating legacy inventory data.
4. Customize campaign assets under `assets/` (create the folder if necessary).
5. Use n8n to run the workflows that publish to TikTok, Instagram, and Google Ads.

## Automation

Integrate `openrouter` within your n8n workflows to generate captions and ad copy automatically. Adjust the prompt parameters to fit the brand voice and note when a post should be ephemeral (for example, limited-time TikTok videos).

To customize which AI model is used, set environment variables recognized by openrouter in your n8n execution environment.

## Project History

Recent updates have focused on improving the look and feel of the site:

- Enhanced contrast and readability in both light and dark modes.
- Refined the landing content layout with flexible boxes and animations.
- Expanded the company section with image placeholders and social links.
- Added a responsive hero section and placeholder ad area for popular cars.

## Credits

The site design is based on [Notus NextJS](https://github.com/creativetimofficial/notus-nextjs) by Creative Tim. This project modifies that template to focus on JDM car marketing in the U.S. market.


## License

This project is licensed under the MIT License. See [`LICENSE`](LICENSE) for details.
