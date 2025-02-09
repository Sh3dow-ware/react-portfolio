import { useEffect, useState } from "react";
import { PresenceStatus } from "../types/OnlineStatus.tsx";
import "../style/component/Footer.scss";
import userProfile from "../images/user.jpg"

interface UserProfileProps {
    name: string;
    about: string
    role: string[]
}

export const WindowFocusHandler = (user: UserProfileProps) => {
    const [state, setState] = useState<PresenceStatus>("offline");

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await fetch("http://localhost:3000/status");
                if (!response.ok){
                    throw new Error("Failed to fetch status");
                }
                const jsonResponse = await response.json();
                console.log(jsonResponse);

                setState(jsonResponse.status || "offline");
            } catch (error) {
                console.error("Error fetching status:", error);
                setState("offline");
            }
        };

        fetchUserDetails();
        const interval = setInterval(fetchUserDetails, 30000);

        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="footer">
            <p className="footer-header">My Profile</p>
            <div className="user-card">
                {/* Profile Image + Status */}
                <div className="user-card__image-container">
                    <img className="user-card__image" src={userProfile} alt="profile" />
                    <span className={`user-card__status user-card__status--${state}`}></span>
                </div>

                {/* User Info */}
                <div className="user-card__info">
                    <h2 className="user-card__name">{user.name}</h2>
                    <div className="user-card__roleinfo">
                    {user.role.map((item) => (
                        <p key={item} className="user-card__role">{item}</p>
                    ))}
                    </div>
                    <p className="user-card__about">{user.about}</p>
                </div>
            </div>
        </footer>
    );
};
