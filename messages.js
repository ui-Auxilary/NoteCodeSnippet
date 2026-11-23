export class Messages {
  constructor(client) {
    this.client = client;
  }

  /** Sends a message on a channel using a stored template. */
  create({ channel, to, templateId, variables }) {
    return this.client.post('/v1/messages', {
      channel,
      to,
      template_id: templateId,
      variables,
    });
  }
}
