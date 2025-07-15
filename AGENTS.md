# Agent Guidelines

Automated agents working in this repository should follow these rules:

1. **Keep commits focused.** Each commit should represent a single change or fix.
2. **Preserve marketing context.** All content should relate to JDM car enthusiasts in the U.S. market.
3. **Test workflows locally.** Use `n8n` to verify any automation before committing.
4. **Do not commit secrets.** API keys or private data must never be stored in the repo.
5. **Use clear Markdown.** Documentation updates should be formatted with readable headings and lists.
6. **Customize openrouter prompts.** Define tone, hashtags, and any ephemeral constraints directly in the prompt so that posts match the campaign style.
7. **Follow integration guidelines.** When implementing data workflows or automation that interface with legacy systems, reference `Legacy_System_Integration_Architecture.md` for the recommended event-driven approach.

## Platform Agents

### TikTok
- Schedule short-form videos with trending audio.
- Monitor comments and engage with viewers.

### Instagram
- Publish car showcases and behind-the-scenes content.
- Use hashtags relevant to the U.S. JDM community.

### Google Ads
- Target search terms used by U.S. JDM enthusiasts.
- Optimize bids and keywords for best performance.

### openrouter
- Generate captions and ad copy using AI models.
- Modify prompts in n8n workflows to match brand tone and ephemeral content needs.
