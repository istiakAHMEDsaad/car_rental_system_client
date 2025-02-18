import { useContext } from 'react';
import toast from 'react-hot-toast';
import { IoArrowBack } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { IoWarning } from 'react-icons/io5';

const Register = () => {
  const { createUser, updateUserProfile, setUser, signInWithGoogle } =
    useContext(AuthContext);
  const navigate = useNavigate();

  // register with email & password
  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.username.value;
    const url = form.url.value;
    const email = form.email.value;
    const password = form.password.value;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (password.length < 6) {
      toast('Password Must Contain 6 Character!', { icon: <IoWarning /> });
      return;
    } else if (!passwordRegex.test(password)) {
      toast(
        'Password must be contain 1 uppercase, 1 lowercase, 1 number, and 1 special character',
        { icon: <IoWarning />, duration: 3000 }
      );
      return;
    }
    
    try {
      const result = await createUser(email, password);
      await updateUserProfile(username, url);
      setUser({
        ...result.user,
        photoURL: url,
        displayName: username,
      });
      toast.success('Signup Successful, Now login');
      navigate('/login');
    } catch (error) {
      toast.error(error?.message);
    }
  };

  // register with google
  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      toast.success('Login Successful');
      navigate('/');
    } catch (error) {
      toast.error(error?.message);
    }
  };

  return (
    <div>
      <div className='md:p-20'>
        <Link to={'/'} className='btn mb-10'>
          <IoArrowBack />
          <span>Go Home</span>
        </Link>

        <div>
          <form
            onSubmit={handleRegister}
            className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto'
          >
            <div className='card-body'>
              {/* Google Button */}
              <button
                onClick={handleGoogleLogin}
                className='btn bg-white text-black border-[#e5e5e5]'
              >
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

              <div className='flex items-center justify-between'>
                <span className='border border-gray-400 w-2/7 '></span>
                Create an Account
                <span className='border border-gray-400 w-2/7 '></span>
              </div>

              {/* Registration Form */}
              <fieldset className='fieldset'>
                <label className='fieldset-label'>Username</label>
                <input
                  type='text'
                  name='username'
                  className='input'
                  required
                  placeholder='Ex. Rahim, Karim.....'
                />

                {/* Photo url */}
                <label className='fieldset-label'>Photo URL</label>
                <input
                  type='url'
                  name='url'
                  className='input'
                  required
                  placeholder='photo url link'
                />

                {/* Email */}
                <label className='fieldset-label'>Email</label>
                <input
                  type='email'
                  name='email'
                  className='input'
                  required
                  placeholder='Ex. rahim@gmail.com'
                />

                {/* Password */}
                <label className='fieldset-label'>Password</label>
                <input
                  type='password'
                  name='password'
                  className='input'
                  required
                  placeholder='create a strong memorable password'
                />

                <div>
                  <p className='text-base text-gray-600'>
                    Already have account?{' '}
                    <Link
                      to={'/login'}
                      className='text-blue-700 font-semibold cursor-pointer hover:underline hover:text-cyan-500 transition-colors'
                    >
                      Login
                    </Link>
                  </p>
                </div>

                <button className='btn btn-neutral mt-4'>Register</button>
              </fieldset>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
