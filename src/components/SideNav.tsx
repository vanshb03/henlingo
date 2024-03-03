/**
 * v0 by Vercel.
 * @see https://v0.dev/t/GilgH3qEXPW
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
// import homeIcon from "/homeIcon.svg";

export default function SideNav() {
  return (
    <div className="flex left-0 top-0 h-screen">
      <div className="h-screen flex flex-col border-r border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-gray-950 p-4 min-w-[256px]">
        {/* logo */}
        <Link className="flex items-center py-8 pl-4" href="/">
          <h2 className="font-feather-bold text-4xl text-[#6BA6FF]">
            henlingo
          </h2>
        </Link>

        <nav className="flex flex-col">
          <ul className="flex flex-col gap-2">
            {/* home */}
            <Link href="/home/lesson">
              <li className="flex rounded-[12px] bg-iguana border-blue-jay text-macaw border-2 px-2 py-1 min-h-[40px]">
                <div className="flex mr-[20px] w-[36px] h-[36px]">
                  <HomeIcon className="pl-[6px] w-[36px] h-[36px]" />
                </div>
                <span className="flex items-center font-din-rounded font-bold text-[15px] tracking-[0.8px]">
                  LEARN
                </span>
              </li>
            </Link>
            {/* practice */}
            <Link href="/home/quiz">
              <li className="flex rounded-[12px] text-wolf px-2 py-1 min-h-[40px] hover:bg-hover">
                <div className="flex mr-[20px] w-[36px] h-[36px]">
                  <PracticeIcon className="pl-[6px] w-[36px] h-[36px]" />
                </div>
                <span className="flex items-center font-din-rounded font-bold text-[15px] tracking-[0.8px]">
                  PRACTICE
                </span>
              </li>
            </Link>
            {/* Leaderboard */}
            <li className="flex rounded-[12px] text-wolf px-2 py-1 min-h-[40px] hover:bg-hover">
              <div className="flex mr-[20px] w-[36px] h-[36px]">
                <LeaderboardIcon className="pl-[6px] w-[36px] h-[36px]" />
              </div>
              <span className="flex items-center font-din-rounded font-bold text-[15px] tracking-[0.8px]">
                LEADERBOARD
              </span>
            </li>
            {/* Shop */}
            <li className="flex rounded-[12px] text-wolf px-2 py-1 min-h-[40px] hover:bg-hover">
              <div className="flex mr-[20px] w-[36px] h-[36px]">
                <ShopIcon className="pl-[6px] w-[36px] h-[36px]" />
              </div>
              <span className="flex items-center font-din-rounded font-bold text-[15px] tracking-[0.8px]">
                SHOP
              </span>
            </li>
            {/* Settings */}
            <li className="flex rounded-[12px] text-wolf px-2 py-1 min-h-[40px] hover:bg-hover">
              <div className="flex mr-[20px] w-[36px] h-[36px]">
                <SettingsIcon className="pl-[6px] w-[36px] h-[36px]" />
              </div>
              <span className="flex items-center font-din-rounded font-bold text-[15px] tracking-[0.8px]">
                LOG OUT
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

function HomeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="32px"
      height="32px"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M24.5852 25.2658C24.2883 26.8243 22.9257 27.9519 21.3392 27.9519H10.6401C9.05354 27.9519 7.69094 26.8243 7.39408 25.2658L4.98096 12.5969L15.9001 4.52225L26.9988 12.5941L24.5852 25.2658Z"
        fill="#FFC800"
      />
      <path
        opacity="0.5"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.1558 23.1111C13.1558 22.522 13.6333 22.0444 14.2224 22.0444H18.4891C19.0782 22.0444 19.5558 22.522 19.5558 23.1111C19.5558 23.7002 19.0782 24.1778 18.4891 24.1778H14.2224C13.6333 24.1778 13.1558 23.7002 13.1558 23.1111Z"
        fill="#945151"
      />
      <path
        d="M19.4785 16.2998C19.4785 18.2208 17.9212 19.778 16.0002 19.778C14.0792 19.778 12.522 18.2208 12.522 16.2998C12.522 14.3788 14.0792 12.8215 16.0002 12.8215C17.9212 12.8215 19.4785 14.3788 19.4785 16.2998Z"
        fill="#945151"
      />
      <path
        d="M16.1685 2.84462C16.6431 2.84231 17.1233 2.98589 17.5361 3.28558L17.5368 3.2861L29.9455 12.2319C30.9781 12.9822 31.207 14.4275 30.4568 15.4601C29.7067 16.4924 28.262 16.7215 27.2294 15.9719L27.2286 15.9714L16.1602 7.99185L5.09208 15.9712L5.09121 15.9719C4.05865 16.7213 2.61395 16.4923 1.86391 15.4599C1.11367 14.4273 1.34258 12.982 2.3752 12.2318L2.37679 12.2306L14.7839 3.28596L14.7846 3.28544C15.2022 2.98229 15.6887 2.83889 16.1685 2.84462Z"
        fill="#FF4B4B"
      />
    </svg>
  );
}

function PracticeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
    >
      <g clipPath="url(#clip0)">
        <line
          x1="18.4199"
          y1="25.0669"
          x2="27.0802"
          y2="20.0669"
          stroke="#AFAFAF"
          strokeWidth="3"
        />
        <rect
          x="19.9639"
          y="9.7417"
          width="9"
          height="26"
          rx="4.5"
          transform="rotate(-30 19.9639 9.7417)"
          fill="#1CB0F6"
        />
        <rect
          x="5.24219"
          y="18.2417"
          width="9"
          height="26"
          rx="4.5"
          transform="rotate(-30 5.24219 18.2417)"
          fill="#1CB0F6"
        />
        <rect
          x="28.0264"
          y="9.70581"
          width="9"
          height="18"
          rx="4.5"
          transform="rotate(-30 28.0264 9.70581)"
          fill="#1CB0F6"
        />
        <rect
          x="1.17969"
          y="25.2058"
          width="9"
          height="18"
          rx="4.5"
          transform="rotate(-30 1.17969 25.2058)"
          fill="#1CB0F6"
        />
        <rect
          opacity="0.3"
          x="5.17969"
          y="26.2058"
          width="3"
          height="5"
          rx="1.5"
          transform="rotate(-30 5.17969 26.2058)"
          fill="white"
        />
        <rect
          opacity="0.3"
          x="33.1797"
          y="11.2058"
          width="3"
          height="5"
          rx="1.5"
          transform="rotate(-30 33.1797 11.2058)"
          fill="white"
        />
        <rect
          opacity="0.3"
          x="9.17969"
          y="19.2058"
          width="3"
          height="6"
          rx="1.5"
          transform="rotate(-30 9.17969 19.2058)"
          fill="white"
        />
        <rect
          opacity="0.3"
          x="24.1797"
          y="11.2058"
          width="3"
          height="6"
          rx="1.5"
          transform="rotate(-30 24.1797 11.2058)"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="46" height="46" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function LeaderboardIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
    >
      <path
        d="M7 9.5C7 7.84314 8.34315 6.5 10 6.5H36C37.6569 6.5 39 7.84315 39 9.5V23.5C39 32.3366 31.8366 39.5 23 39.5C14.1634 39.5 7 32.3366 7 23.5V9.5Z"
        fill="#FEC701"
      />
      <path
        opacity="0.3"
        d="M39.0001 13.3455V9.5C39.0001 7.84315 37.657 6.5 36.0001 6.5H31.5706L8.30957 29.8497C9.68623 33.0304 12.0656 35.6759 15.0491 37.3877L39.0001 13.3455Z"
        fill="white"
      />
    </svg>
  );
}

function ShopIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
    >
      <path
        d="M40 36V17H6V36C6 38.2091 7.73969 40 9.88571 40H36.1143C38.2603 40 40 38.2091 40 36Z"
        fill="#A56644"
      />
      <path d="M4 10C4 7.79086 5.79086 6 8 6H17V17H4V10Z" fill="#EA2B2B" />
      <path
        d="M4 17H17V17.5C17 21.0899 14.0899 24 10.5 24C6.91015 24 4 21.0899 4 17.5V17Z"
        fill="#FF4945"
      />
      <path
        d="M17 17H29V17.5C29 21.0899 26.3137 24 23 24C19.6863 24 17 21.0899 17 17.5V17Z"
        fill="white"
      />
      <path
        d="M29 17H42V17.5C42 21.0899 39.0899 24 35.5 24C31.9101 24 29 21.0899 29 17.5V17Z"
        fill="#FF4945"
      />
      <path d="M17 6H29V17H17V6Z" fill="#D0D0D0" />
      <path d="M29 6H38C40.2091 6 42 7.79086 42 10V17H29V6Z" fill="#EA2B2B" />
      <path
        d="M11 30C11 28.8954 11.8954 28 13 28H18C19.1046 28 20 28.8954 20 30V40H11V30Z"
        fill="#B9E8FF"
      />
      <path
        d="M24 30C24 28.8954 24.8954 28 26 28H34C35.1046 28 36 28.8954 36 30V34C36 35.1046 35.1046 36 34 36H26C24.8954 36 24 35.1046 24 34V30Z"
        fill="#B9E8FF"
      />
    </svg>
  );
}

function SettingsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
    >
      <circle
        cx="23"
        cy="23"
        r="19"
        fill="#CE82FF"
        stroke="#CE82FF"
        strokeWidth="2"
      />
      <circle cx="15" cy="23" r="2" fill="white" />
      <circle cx="23" cy="23" r="2" fill="white" />
      <circle cx="31" cy="23" r="2" fill="white" />
    </svg>
  );
}
