export default defineEventHandler((event) => {
  const url = event.node.req.url;
  
  if (url && url.startsWith('/ko')) {
    const newPath = url.replace(/^\/ko/, '/en');
    return sendRedirect(event, newPath, 301);
  }
});
