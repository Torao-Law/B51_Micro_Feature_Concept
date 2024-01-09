import React from 'react';

const Register: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6">Register</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="fullname" className="block text-gray-600 text-sm font-medium mb-1">
              Full Name
            </label>
            <input type="text" id="fullname" name="fullname" className="w-full border p-2 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-600 text-sm font-medium mb-1">
              Address
            </label>
            <input type="text" id="address" name="address" className="w-full border p-2 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="gender" className="block text-gray-600 text-sm font-medium mb-1">
              Gender
            </label>
            <select id="gender" name="gender" className="w-full border p-2 rounded">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-1">
              Username
            </label>
            <input type="text" id="username" name="username" className="w-full border p-2 rounded" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-1">
              Password
            </label>
            <input type="password" id="password" name="password" className="w-full border p-2 rounded" />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Register
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600">
          Already have an account? <a href="/login" className="text-blue-500">Login here</a>.
        </p>
      </div>
    </div>
  );
};

export default Register;
