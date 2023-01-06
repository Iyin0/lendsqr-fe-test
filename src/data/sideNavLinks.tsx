import users from "../images/svg/user-friends 1.svg"
import guarantors from '../images/svg/users 1.svg'
import loans from '../images/svg/sack 1.svg'
import decision from '../images/svg/handshake-regular 1.svg'
import savings from '../images/svg/piggy-bank 1.svg'
import requests from '../images/svg/Group 104.svg'
import whitelist from '../images/svg/user-check 1.svg'
import karma from '../images/svg/user-times 1.svg'
import organization from '../images/svg/briefcase 1.svg'
import product from '../images/svg/product 1.svg'
import fees from '../images/svg/coins-solid 1.svg'
import transactions from '../images/svg/icon.svg'
import services from '../images/svg/galaxy 1.svg'
import account from '../images/svg/user-cog 1.svg'
import settlement from '../images/svg/scroll 1.svg'
import report from '../images/svg/chart-bar 2.svg'
import preferences from '../images/svg/sliders-h 1.svg'
import pricing from '../images/svg/badge-percent 1.svg'
import audit from '../images/svg/clipboard-list 1.svg'
import dashboard from '../images/svg/home 1.svg'

const Links = {
    organization: organization,
    dashboard: dashboard,
    customers: [
        {
            text: 'Users',
            icon: users,
            href: '#'
        },
        {
            text: 'Guarantors',
            icon: guarantors,
            href: '#'
        },
        {
            text: 'Loans',
            icon: loans,
            href: '#'
        },
        {
            text: 'Decision Models',
            icon: decision,
            href: '#'
        },
        {
            text: 'Savings',
            icon: savings,
            href: '#'
        },
        {
            text: 'Loan Requests',
            icon: requests,
            href: '#'
        },
        {
            text: 'Whitelist',
            icon: whitelist,
            href: '#'
        },
        {
            text: 'Karma',
            icon: karma,
            href: '#'
        }
    ],

    business: [
        {
            text: 'Organization',
            icon: organization,
            href: '#'
        },
        {
            text: 'Loan Products',
            icon: requests,
            href: '#'
        },
        {
            text: 'Savings Products',
            icon: product,
            href: '#'
        },
        {
            text: 'Fees and Charges',
            icon: fees,
            href: '#'
        },
        {
            text: 'Transactions',
            icon: transactions,
            href: '#'
        },
        {
            text: 'Services',
            icon: services,
            href: '#'
        },
        {
            text: 'Service Account',
            icon: account,
            href: '#'
        },
        {
            text: 'Settlements',
            icon: settlement,
            href: '#'
        },
        {
            text: 'Reports',
            icon: report,
            href: '#'
        }
    ],

    settings: [
        {
            text: 'Preferences',
            icon: preferences,
            href: '#'
        },
        {
            text: 'Fees and Pricing',
            icon: pricing,
            href: '#'
        },
        {
            text: 'Audit Logs',
            icon: audit,
            href: '#'
        }
    ]
}

export default Links
