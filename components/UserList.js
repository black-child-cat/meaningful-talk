// components/UserList.js
import Link from "next/link";
import UsersImage from "../components/UsersImage.js";
const imagePath = `${process.env.NEXT_PUBLIC_BASE_PATH}/images/`;

const getColorClass = (value) => {
  if (value <= 25) return "text-red-200";
  if (value <= 50) return "text-yellow-300";
  if (value <= 75) return "text-yellow-400";
  return "text-green-400";
};

const UserList = ({ users, suitabilityFilter }) => {
  // const suitabilityFilter = true;
  return (
    <ul className="pb-1">
      {users.map((user) => {
        let { userStyle, userOpacity } = "";
        if (suitabilityFilter) {
          userStyle =
            user.score >= 80
              ? "bg-white border-gray-100"
              : "bg-gray-100 border-gray-200 opacity-70";
          userOpacity = user.score >= 80 ? "" : "opacity-40";
        } else {
          userStyle = "bg-white border-gray-100";
          userOpacity = "";
        }
        return (
          <li
            key={user.id}
            className={userStyle + ` border-t transition-opacity`}
          >
            <Link href={`/chat/${user.id}`} className="flex gap-3 px-3 py-2">
              <div className="">
                <div className="w-12 rounded-full">
                  <UsersImage
                    className={
                      userOpacity +
                      ` aspect-square h-auto w-auto rounded-full bg-gray-200`
                    }
                    src={imagePath + `users/` + user.image}
                    alt="説明"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
              <div className="">
                <div className={userOpacity + ` font-bold line-clamp-1`}>
                  {user.name}
                </div>
                <div
                  className={
                    userOpacity +
                    ` text-gray-500 text-xs flex items-center pt-1`
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="1 0 24 24"
                    width={16}
                    height={16}
                    fill="currentColor"
                  >
                    <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>
                  </svg>
                  {user.area} - 予約回数 {user.num_reservation}回
                </div>
              </div>
              <div
                className={
                  userOpacity +
                  ` ml-auto border-l border-gray-100 pl-3 flex items-center gap-2`
                }
              >
                <p className="text-xs text-gray-400 pr-1 whitespace-nowrap">
                  女性評価
                </p>
                <div
                  className={`radial-progress text-xs ${getColorClass(
                    user.score
                  )} bg-gray-100`}
                  style={{ "--value": user.score }}
                  role="progressbar"
                >
                  <span className="text-gray-500">{user.score}点</span>
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default UserList;
