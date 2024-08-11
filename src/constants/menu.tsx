import CalIcon from '@/icons/cal-icon'
import ChatIcon from '@/icons/chat-icon'
import DashboardIcon from '@/icons/dashboard-icon'
import { DepositIcon } from '@/icons/deposit-icon'
import EmailIcon from '@/icons/email-icon'
import HelpDeskIcon from '@/icons/help-desk-icon'
import IntegrationsIcon from '@/icons/integrations-icon'
import { InvestmentIcon } from '@/icons/investment-icon'
import { OurPlansIcon } from '@/icons/Ourplans-icon'
import { MyProfileIcon } from '@/icons/profile-icon'
import SettingsIcon from '@/icons/settings-icon'
import StarIcon from '@/icons/star-icon'
import TimerIcon from '@/icons/timer-icon'
import {TransactionsIcon}  from '@/icons/transactions-icon'
import { WithdrawalIcon } from '@/icons/withdrawal-icon'

type SIDE_BAR_MENU_PROPS = {
  label: string
  icon: JSX.Element
  path: string
}

export const SIDE_BAR_MENU:  SIDE_BAR_MENU_PROPS[] = [
  {
    label: 'Dashboard',
    icon: <DashboardIcon/>,
    path: 'dashboard',
  },
  {
    label: 'Transaction',
    icon: <TransactionsIcon />,
    path: 'transaction',
  },
  {
    label: 'Investments',
    icon: <InvestmentIcon />,
    path: 'investments',
  },
  {
    label: 'Settings',
    icon: <SettingsIcon />,
    path: 'settings',
  },
  {
    label: 'Profile',
    icon: <MyProfileIcon />,
    path: 'profile',
  },
  {
    label: 'Our Plans',
    icon: <OurPlansIcon />,
    path: 'plans',
  },
  {
    label: 'Deposit',
    icon: <DepositIcon />,
    path: 'deposit',
  },
  {
    label: 'Withdraw',
    icon: <WithdrawalIcon />,
    path: 'withdraw',
  },
]

type TABS_MENU_PROPS = {
  label: string
  icon?: JSX.Element
}

export const TABS_MENU: TABS_MENU_PROPS[] = [
  {
    label: 'unread',
    icon: <EmailIcon />,
  },
  {
    label: 'all',
    icon: <EmailIcon />,
  },
  {
    label: 'expired',
    icon: <TimerIcon />,
  },
  {
    label: 'starred',
    icon: <StarIcon />,
  },
]

export const HELP_DESK_TABS_MENU: TABS_MENU_PROPS[] = [
  {
    label: 'help desk',
  },
  {
    label: 'questions',
  },
]

export const APPOINTMENT_TABLE_HEADER = [
  'Name',
  'RequestedTime',
  'Added Time',
  'Domain',
]

export const EMAIL_MARKETING_HEADER = ['Id', 'Email', 'Answers', 'Domain']

export const BOT_TABS_MENU: TABS_MENU_PROPS[] = [
  {
    label: 'chat',
    icon: <ChatIcon />,
  },
  {
    label: 'helpdesk',
    icon: <HelpDeskIcon />,
  },
]