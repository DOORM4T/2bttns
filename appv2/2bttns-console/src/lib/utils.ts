import { Session } from "next-auth";

export function getAvatarLetterFromSession(session: Session) {
  if (!session || !session.user || !session.user.name) return "🗿";
  return session.user?.name?.charAt(0).toUpperCase();
}
