export default defineNuxtRouteMiddleware(async (to, from) => {
  // 클라이언트 사이드에서만 실행
  if (process.server) {
    return;
  }

  const client = useSupabaseClient();
  const localePath = useLocalePath();

  // 현재 세션 확인
  const {
    data: { session },
  } = await client.auth.getSession();

  // 세션이 없으면 로그인 페이지로 리다이렉트
  if (!session) {
    return navigateTo(localePath('/admin'));
  }
});
