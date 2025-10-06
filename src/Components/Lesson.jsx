import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

export default function Lesson() {
  const {user} = useContext(AuthContext);
    return <div>
      
  </div>;
}
