import { Heading } from "../../components/heading";
import { StudentForm } from "./components/school-form";
import { UserForm } from "./components/user-form";

export default function ProfilePage() {
  return (
    <div>
      <Heading title="Profile" subtitle="edit your profile" />
      <div className="grid md:grid-cols-2 grid-cols-1">
        <StudentForm />
        <UserForm />
      </div>
    </div>
  );
}
