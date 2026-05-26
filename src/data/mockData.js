// ── Leave Requests ──────────────────────────────────────────────
export const LEAVE_REQUESTS = [
  {
    id: 1,
    empId: "DEV501",
    name: "Rahul Anthony",
    initials: "RA",
    avatarBg: "#CFC6F0",
    initialsColor: "#7755F5",
    leaveType: "Sick leave",
    date: "May 3 – May 7",
    duration: "5 days",
    status: "pending",
  },
  {
    id: 2,
    empId: "PRO561",
    name: "Kavin Diyopal",
    initials: "KD",
    avatarBg: "#98D8F6",
    initialsColor: "#0076AD",
    leaveType: "Casual leave",
    date: "May 12 – May 13",
    duration: "2 days",
    status: "pending",
  },
  {
    id: 3,
    empId: "SAL555",
    name: "Kenvin Jose",
    initials: "KJ",
    avatarBg: "#F0D7C6",
    initialsColor: "#A81D44",
    leaveType: "Annual leave",
    date: "June 2 – June 6",
    duration: "5 days",
    status: "pending",
  },
];

// ── Leave Balances (Updated with dept and empId) ────────────────
export const LEAVE_BALANCES = [
  {
    id: 1,
    empId: "DEV501",
    dept: "Development",
    name: "Rahul Anthony",
    initials: "RA",
    avatarBg: "#CFC6F0",
    initialsColor: "#7755F5",
    casual: { used: 8, total: 12 },
    sick: { used: 4, total: 10 },
    earned: { used: 15, total: 20 },
  },
  {
    id: 2,
    empId: "PRO561",
    dept: "Product",
    name: "Kavin Diyopal",
    initials: "KD",
    avatarBg: "#98D8F6",
    initialsColor: "#0076AD",
    casual: { used: 10, total: 12 },
    sick: { used: 2, total: 10 },
    earned: { used: 18, total: 20 },
  },
  {
    id: 3,
    empId: "SAL555",
    dept: "Sales",
    name: "Kenvin Jose",
    initials: "KJ",
    avatarBg: "#F0D7C6",
    initialsColor: "#A81D44",
    casual: { used: 5, total: 12 },
    sick: { used: 7, total: 10 },
    earned: { used: 4, total: 20 },
  },
];

// ── Navigation items ─────────────────────────────────────────────
export const NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: "⊞" },
  { id: "employee",  label: "Employee",  icon: "👤" },
  { id: "attendance",label: "Attendance",icon: "📅" },
  { id: "payroll",   label: "Payroll",   icon: "💳" },
  { id: "leave",     label: "Leave",     icon: "🗓" },
  { id: "recruitment",label: "Recruitment",icon: "👥" },
];

// ── Logged-in user (Updated for Profile Page) ────────────────────
export const CURRENT_USER = {
  name: "Rakesh",
  role: "HR Admin",
  initials: "RK",
  avatarBg: "#C3D0F3",
  initialsColor: "#201D48",
  email: "rakesh.admin@hrconnect.com", 
  empId: "HR001", 
};

// ── Page titles (Updated with Profile) ───────────────────────────
export const PAGE_TITLES = {
  dashboard:   "Dashboard",
  employee:    "Employee",
  attendance:  "Attendance",
  payroll:     "Payroll",
  leave:       "Leave Management",
  recruitment: "Recruitment",
  profile:     "Login Information", 
};