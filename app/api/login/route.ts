// app/api/login/route.ts
- import { login } from '@/lib/auth';
+ import { login } from '../../../lib/auth';

// app/api/logout/route.ts
- import { logout } from '@/lib/auth';
+ import { logout } from '../../../lib/auth';

// app/api/whoami/route.ts
- import { getSessionFromCookie } from '@/lib/auth';
+ import { getSessionFromCookie } from '../../../lib/auth';
