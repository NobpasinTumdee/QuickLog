// import { EnvVarWarning } from "@/components/env-var-warning";
// import { AuthButton } from "@/components/auth-button";
// import { hasEnvVars } from "@/lib/utils";
// import Link from "next/link";



import { ThemeSwitcher } from "@/components/theme-switcher";
import './globals.css'
import register from "./action";

export default function Home() {
  return (
    <>
      <div className="Home">
        <nav className="nav-home">
          {/* {!hasEnvVars ? <EnvVarWarning /> : <AuthButton />} */}
          <ThemeSwitcher />
        </nav>

        <div className="home-main">
          <h1>Register</h1>
          <div >
            <form action={register} className="form-register">
              <input
                type="text"
                name="name"
                placeholder="name"
                required
              />
              <br />
              <input
                type="email"
                name="email"
                placeholder="email"
                required
              />
              <br />
              <input
                type="password"
                name="password"
                placeholder="password"
                required
              />
              <br />
              <input
                type="file"
                name="avatar_url"
                placeholder="Picture"
              />
              <br />
              <button >
                register!!!
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
