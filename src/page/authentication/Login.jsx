import { useContext } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await logIn(email, password);
      toast.success('Login user successfully');
    } catch (error) {
      toast.error(error?.message);
    }
  };

  return (
    <div className='h-screen'>
      <div className='lg:p-20'>
        {/* btn */}
        <Link to={'/'} className='lg:m-0 mt-8 mb-8 ml-4 block'>
          <button className='btn flex items-center'>
            <IoArrowBack />
            <span>Go Back</span>
          </button>
        </Link>

        {/* Form */}
        <div className='lg:flex lg:flex-row-reverse lg:py-16 lg:gap-10'>
          {/* left side */}
          <div className='text-center lg:text-left lg:basis-[60%]'>
            <h1 className='text-5xl font-bold'>Login now!</h1>
            <p className='py-6'>
              Competently exploit B2C synergy via holistic e-markets.
              Dynamically productivate customer directed partnerships.
            </p>
            {/* Login */}
            <button className='btn bg-white text-black border-[#e5e5e5]'>
              <svg
                aria-label='Google logo'
                width='16'
                height='16'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
              >
                <g>
                  <path d='m0 0H512V512H0' fill='#fff'></path>
                  <path
                    fill='#34a853'
                    d='M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341'
                  ></path>
                  <path
                    fill='#4285f4'
                    d='m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57'
                  ></path>
                  <path
                    fill='#fbbc02'
                    d='m90 341a208 200 0 010-171l63 49q-12 37 0 73'
                  ></path>
                  <path
                    fill='#ea4335'
                    d='m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55'
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </div>

          {/* right side */}
          <form
            onSubmit={handleLogin}
            className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl lg:basis-[40%] mx-auto'
          >
            <div className='card-body'>
              <fieldset className='fieldset'>
                <label className='fieldset-label'>Email</label>
                <input
                  type='email'
                  name='email'
                  className='input'
                  placeholder='Email'
                />
                <label className='fieldset-label'>Password</label>
                <input
                  type='password'
                  name='password'
                  className='input'
                  placeholder='Password'
                />
                <div>
                  <a className='link link-hover'>Forgot password?</a>
                </div>
                <button className='btn btn-neutral mt-4'>Login</button>
                <Link to={"/signup"} className='btn btn-info mt-4'>Sign Up</Link>
              </fieldset>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
