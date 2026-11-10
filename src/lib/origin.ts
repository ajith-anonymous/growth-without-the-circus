/** Resolve the public origin of a request (sandbox previews forward the real host). */
export function requestOrigin(request: Request): string {
  const url = new URL(request.url);
  const sandboxHost = url.hostname === "localhost" ? request.headers.get("x-forwarded-host") : null;
  return sandboxHost ? `https://${sandboxHost}` : url.origin;
}
