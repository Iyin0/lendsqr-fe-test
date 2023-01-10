import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import PageTransition from "../components/pageTransition";
import '../styles/userDetails.scss'

type UserType = {
    createdAt: Date,
    orgName: string,
    userName: string,
    email: string,
    phoneNumber: string,
    lastActiveDate: string,
    profile: {
        firstName: string,
        lastName: string,
        phoneNumber: string,
        avatar: string,
        gender: string,
        bvn: string,
        address: string,
        currency: string
    },
    guarantor: {
        firstName: string,
        lastName: string,
        phoneNumber: string,
        gender: string,
        address: string
    },
    accountBalance: string,
    accountNumber: string,
    socials: {
        facebook: string,
        instagram: string,
        twitter: string
    },
    education: {
        level: string,
        employmentStatus: string,
        sector: string,
        duration: string,
        officeEmail: string,
        monthlyIncome: [
            string,
            string
        ],
        loanRepayment: string
    },
    id: string,
    status: string
}

const UserDetails = () => {

    const param = useParams()
    const [user, setUser] = useState<UserType | null>(null)
    const [error, setError] = useState(false)
    const [fetching, setFetching] = useState(false)
    const [general, setGeneral] = useState(true)
    const [document, setDocument] = useState(false)
    const [bank, setBank] = useState(false)
    const [loans, setLoans] = useState(false)
    const [savings, setSavings] = useState(false)
    const [system, setSystem] = useState(false)
    const [status, setStatus] = useState(user?.status)

    const getUser = async () => {

        // const user_details = window.localStorage.getItem('user')
        // if (user_details !== null) {
        //     const userObj = JSON.parse(user_details)
        //     if (userObj.id === param.id) {
        //         setUser(userObj)
        //         setFetching(false)
        //     }
        //     else {
        //         setFetching(true)
        //     }
        // }
        // else {
        //     setFetching(true)
        // }
        setFetching(true)
        setError(false)
        const response = await fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${param.id}`)
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setFetching(false)
        }

        if (response.ok) {
            setUser({ ...json, status: 'pending' })
            setFetching(false)
            window.localStorage.setItem('user', JSON.stringify({ ...json, status: 'pending' }))
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <PageTransition>
            <main className="user-details">
                {fetching &&
                    <div className="unloaded">
                        <p>Loading...</p>
                    </div>
                }
                {error &&
                    <div className="unloaded">
                        <p>{error}</p>
                    </div>
                }
                {user &&
                    <div>
                        <Link to='/users'>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.94997 15.3564C1.9945 15.4712 2.0613 15.5767 2.14684 15.6658L5.89684 19.4157C6.07263 19.5927 6.31285 19.6935 6.56248 19.6935C6.81211 19.6935 7.05232 19.5927 7.22812 19.4157C7.40508 19.24 7.50586 18.9997 7.50586 18.7501C7.50586 18.5005 7.40508 18.2603 7.22812 18.0845L5.07187 15.9376H27.6562C28.1742 15.9376 28.5937 15.5181 28.5937 15.0001C28.5937 14.4821 28.1742 14.0626 27.6562 14.0626H5.07187L7.22812 11.9158C7.5961 11.5478 7.5961 10.9525 7.22812 10.5845C6.86014 10.2165 6.26485 10.2165 5.89687 10.5845L2.14687 14.3345C2.06133 14.4236 1.99453 14.529 1.95 14.6439C1.90195 14.7564 1.87617 14.8771 1.875 15.0001C1.87617 15.1232 1.90195 15.2439 1.95 15.3564L1.94997 15.3564Z" fill="#545F7D" />
                            </svg>
                            Back to Users
                        </Link>
                        <div className="header">
                            <h1>User Details</h1>
                            <div className="status">
                                <button
                                    className="blacklisted"
                                    onClick={() => { user !== null ? user.status = 'blacklisted' : null }}>
                                    BLACKLIST USER
                                </button>
                                <button
                                    className={user?.status === 'active' ? "inactive" : "active"}
                                    onClick={() => { if (user !== null) { if (user.status === 'active') { user.status = 'inactive'; setStatus(user.status) } else { user.status = 'active'; setStatus(user.status) } } }}>
                                    {status === 'active' ? 'UNACTIVATE USER' : 'ACTIVATE USER'}
                                </button>
                            </div>
                        </div>
                        <div className="summary">
                            <div className="top">
                                <div className="profile">
                                    <img src={user?.profile.avatar} alt="" />
                                    <div className="name">
                                        <p>{user?.profile.firstName} {user?.profile.lastName}</p>
                                        <p>{user?.accountNumber}</p>
                                    </div>
                                </div>
                                <div className="tier">
                                    <p>User's Tier</p>
                                    <div className="stars">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M7.98572 1.28751C7.85197 1.29314 7.73572 1.38126 7.69447 1.50876L6.18759 6.17996L1.28071 6.16996C1.14196 6.16996 1.01821 6.25934 0.975716 6.39121C0.932591 6.52371 0.980091 6.66809 1.09259 6.74996L5.06891 9.62676L3.54203 14.293C3.49891 14.4249 3.54578 14.5699 3.65828 14.6511C3.77016 14.733 3.92265 14.733 4.03454 14.6511L7.9995 11.758L11.9657 14.6511C12.0776 14.733 12.2301 14.733 12.342 14.6511C12.4545 14.5699 12.5014 14.4249 12.4582 14.293L10.9314 9.62676L14.9077 6.74996C15.0202 6.66809 15.0677 6.52371 15.0246 6.39121C14.9814 6.25933 14.8583 6.16996 14.7196 6.17059L9.81269 6.18059L8.30393 1.50939V1.50876C8.25956 1.37188 8.12957 1.28188 7.98581 1.28751L7.98572 1.28751Z" fill="#E9B200" />
                                        </svg>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_5530_1562)">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M7.98439 0.959992C7.85189 0.966867 7.73688 1.05437 7.69563 1.18062L6.08939 5.99998H0.945073V6.0006C0.806948 6.0006 0.684449 6.08935 0.641953 6.2206C0.598828 6.35185 0.645078 6.49561 0.755703 6.5781L4.93442 9.63379L3.32818 14.6213V14.6207C3.28506 14.7532 3.33256 14.8976 3.44506 14.9788C3.55756 15.0607 3.70943 15.0601 3.82131 14.9782L8.00003 11.9225L12.1788 14.9782C12.2906 15.0601 12.4425 15.0607 12.555 14.9788C12.6675 14.8976 12.715 14.7532 12.6719 14.6207L11.0656 9.63316L15.2444 6.57748V6.5781C15.355 6.49561 15.4012 6.35185 15.3581 6.2206C15.3156 6.08935 15.1931 6.0006 15.055 6.0006H9.91068L8.30444 1.18124V1.18062C8.26006 1.04374 8.1288 0.953112 7.98444 0.959992H7.98439ZM8.00001 2.29374L9.37564 6.41998V6.4206C9.41814 6.55185 9.54127 6.64122 9.68001 6.6406H14.0738L10.4987 9.255V9.25563C10.3875 9.33688 10.3406 9.48062 10.3831 9.61251L11.7587 13.8807L8.1893 11.2712H8.18867C8.07617 11.1887 7.92368 11.1887 7.81117 11.2712L4.24173 13.8807L5.61736 9.61251H5.61673C5.65923 9.48063 5.61236 9.33687 5.50111 9.25563L1.92607 6.64123H6.31983V6.6406C6.45858 6.64123 6.5817 6.55185 6.6242 6.4206L7.99983 2.29436L8.00001 2.29374Z" fill="#E9B200" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_5530_1562">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_5530_1562)">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M7.98439 0.959992C7.85189 0.966867 7.73688 1.05437 7.69563 1.18062L6.08939 5.99998H0.945073V6.0006C0.806948 6.0006 0.684449 6.08935 0.641953 6.2206C0.598828 6.35185 0.645078 6.49561 0.755703 6.5781L4.93442 9.63379L3.32818 14.6213V14.6207C3.28506 14.7532 3.33256 14.8976 3.44506 14.9788C3.55756 15.0607 3.70943 15.0601 3.82131 14.9782L8.00003 11.9225L12.1788 14.9782C12.2906 15.0601 12.4425 15.0607 12.555 14.9788C12.6675 14.8976 12.715 14.7532 12.6719 14.6207L11.0656 9.63316L15.2444 6.57748V6.5781C15.355 6.49561 15.4012 6.35185 15.3581 6.2206C15.3156 6.08935 15.1931 6.0006 15.055 6.0006H9.91068L8.30444 1.18124V1.18062C8.26006 1.04374 8.1288 0.953112 7.98444 0.959992H7.98439ZM8.00001 2.29374L9.37564 6.41998V6.4206C9.41814 6.55185 9.54127 6.64122 9.68001 6.6406H14.0738L10.4987 9.255V9.25563C10.3875 9.33688 10.3406 9.48062 10.3831 9.61251L11.7587 13.8807L8.1893 11.2712H8.18867C8.07617 11.1887 7.92368 11.1887 7.81117 11.2712L4.24173 13.8807L5.61736 9.61251H5.61673C5.65923 9.48063 5.61236 9.33687 5.50111 9.25563L1.92607 6.64123H6.31983V6.6406C6.45858 6.64123 6.5817 6.55185 6.6242 6.4206L7.99983 2.29436L8.00001 2.29374Z" fill="#E9B200" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_5530_1562">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                                <div className="bank">
                                    <p>&#8358;{user?.accountBalance}</p>
                                    <p>9912345678/Providus Bank</p>
                                </div>
                            </div>
                            <div className="bottom">
                                <button className={general ? "active" : ''}
                                    onClick={() => { setGeneral(true); setDocument(false); setBank(false); setLoans(false); setSavings(false); setSystem(false) }}
                                >General Details</button>
                                <button className={document ? "active" : ''}
                                    onClick={() => { setGeneral(false); setDocument(true); setBank(false); setLoans(false); setSavings(false); setSystem(false) }}
                                >Documents</button>
                                <button className={bank ? "active" : ''}
                                    onClick={() => { setGeneral(false); setDocument(false); setBank(true); setLoans(false); setSavings(false); setSystem(false) }}
                                >Bank Details</button>
                                <button className={loans ? "active" : ''}
                                    onClick={() => { setGeneral(false); setDocument(false); setBank(false); setLoans(true); setSavings(false); setSystem(false) }}
                                >Loans</button>
                                <button className={savings ? "active" : ''}
                                    onClick={() => { setGeneral(false); setDocument(false); setBank(false); setLoans(false); setSavings(true); setSystem(false) }}
                                >Savings</button>
                                <button className={system ? "active" : ''}
                                    onClick={() => { setGeneral(false); setDocument(false); setBank(false); setLoans(false); setSavings(false); setSystem(true) }}
                                >App and System</button>
                            </div>
                        </div>
                        <div className="info-section">
                            {general &&
                                <div className="general">
                                    <div className="info-container">
                                        <h2>Personal Information</h2>
                                        <div className="info">
                                            <div>
                                                <p>FULL NAME</p>
                                                <p>{user?.profile.firstName} {user?.profile.lastName}</p>
                                            </div>
                                            <div>
                                                <p>PHONE NUMBER</p>
                                                <p>{user?.phoneNumber}</p>
                                            </div>
                                            <div>
                                                <p>EMAIL ADDRESS</p>
                                                <p>{user?.email}</p>
                                            </div>
                                            <div>
                                                <p>BVN</p>
                                                <p>{user?.profile.bvn}</p>
                                            </div>
                                            <div>
                                                <p>GENDER</p>
                                                <p>{user?.profile.gender}</p>
                                            </div>
                                            <div>
                                                <p>MARITAL STATUS</p>
                                                <p>Single</p>
                                            </div>
                                            <div>
                                                <p>CHILDREN</p>
                                                <p>None</p>
                                            </div>
                                            <div>
                                                <p>TYPE OF RESIDENCE</p>
                                                <p>Parent's Apartment</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="info-container">
                                        <h2>Education and Employment</h2>
                                        <div className="info">
                                            <div>
                                                <p>LEVEL OF EDUCATION</p>
                                                <p>{user?.education.level}</p>
                                            </div>
                                            <div>
                                                <p>EMPLOYMENT STATUS</p>
                                                <p>{user?.education.employmentStatus}</p>
                                            </div>
                                            <div>
                                                <p>SECTOR OF EMPLOYMENT</p>
                                                <p>{user?.education.sector}</p>
                                            </div>
                                            <div>
                                                <p>DURATION OF EMPLOYMENT</p>
                                                <p>{user?.education.duration}</p>
                                            </div>
                                            <div>
                                                <p>OFFICE EMAIL</p>
                                                <p>{user?.education.officeEmail}</p>
                                            </div>
                                            <div>
                                                <p>MONTHLY INCOME</p>
                                                <p>&#8358;{user?.education.monthlyIncome[1]} - &#8358;{user?.education.monthlyIncome[0]}</p>
                                            </div>
                                            <div>
                                                <p>LOAN REPAYMENT</p>
                                                <p>&#8358;{user?.education.loanRepayment}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="info-container">
                                        <h2>Socials</h2>
                                        <div className="info">
                                            <div>
                                                <p>TWITTER</p>
                                                <p>{user?.socials.twitter}</p>
                                            </div>
                                            <div>
                                                <p>FACEBOOK</p>
                                                <p>{user?.socials.facebook}</p>
                                            </div>
                                            <div>
                                                <p>INSTAGRAM</p>
                                                <p>{user?.socials.instagram}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="info-container">
                                        <h2>Guarantor</h2>
                                        <div className="info">
                                            <div>
                                                <p>FULL NAME</p>
                                                <p>{user?.guarantor.firstName} {user?.guarantor.lastName}</p>
                                            </div>
                                            <div>
                                                <p>PHONE NUMBER</p>
                                                <p>{user?.guarantor.phoneNumber}</p>
                                            </div>
                                            <div>
                                                <p>EMAIL ADDRESS</p>
                                                <p>{user?.guarantor.address}</p>
                                            </div>
                                            <div>
                                                <p>RELATIONSHIP</p>
                                                <p>NIL</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                            {document &&
                                <div>
                                    <h2>Coming soon</h2>
                                </div>
                            }
                            {bank &&
                                <div>
                                    <h2>Coming soon</h2>
                                </div>
                            }
                            {loans &&
                                <div>
                                    <h2>Coming soon</h2>
                                </div>
                            }
                            {savings &&
                                <div>
                                    <h2>Coming soon</h2>
                                </div>
                            }
                            {system &&
                                <div>
                                    <h2>Coming soon</h2>
                                </div>
                            }
                        </div>
                    </div>
                }
            </main>
        </PageTransition>
    );
}

export default UserDetails;