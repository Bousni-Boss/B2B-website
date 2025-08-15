// app/admin/layout.tsx
import { getSessionFromCookie } from '../../lib/auth';

export default async function AdminLayout({children}:{children:React.ReactNode}) {
  const s = await getSessionFromCookie();
  if (!s || (s.role !== 'admin' && s.role !== 'superadmin')) {
    return <div className="container" style={{paddingTop:24}}><div className="card">Unauthorized</div></div>;
  }
  return children;
}
