
import { useNavigate } from "react-router-dom";
function NotFound() {
  const navigate = useNavigate();
  return (
    <main className="w-full flex items-center px-[5%]  flex-col gap-4 justify-center  h-dvh min-h-[400px]">
      <h2 className="font-[900] text-2xl text-center w-full">
        404 - PAGE NOT FOUND
      </h2>
      <p className="w-full ipad:w-3/4 text-center">
        The page you are looking for might have been removed had its name
        changes or is temporary unavailable{" "}
      </p>
      <button
        className="bg-typo px-4 py-2 flex text-white items-center outline-none  justify-center"
        onClick={() => navigate("/")}
      >
       GO TO HOMEPAGE
      </button>
    </main>
  );
}

export default NotFound;
