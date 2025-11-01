import React from "react";

const UserProfile = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans">
            {/* Top Navigation */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                <h1 className="text-2xl font-semibold text-gray-800 mb-4 sm:mb-0">Users</h1>
                <div className="flex space-x-2">
                    <button className="px-4 py-2 bg-white text-gray-700 border rounded-lg shadow-sm hover:bg-gray-100">
                        All Users
                    </button>
                    <button className="px-4 py-2 bg-white text-gray-700 border rounded-lg shadow-sm hover:bg-gray-100">
                        Settings
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
                        Add New User
                    </button>
                </div>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Sidebar */}
                <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
                    <img
                        src="https://randomuser.me/api/portraits/men/75.jpg"
                        alt="Profile"
                        className="w-40 h-40 rounded-lg object-cover mb-4"
                    />
                    <button className="text-gray-600 border rounded-lg px-4 py-2 hover:bg-gray-100 mb-6">
                        Upload Photo
                    </button>

                    <div className="w-full">
                        <label className="text-sm text-gray-500">Old Password</label>
                        <input
                            type="password"
                            className="w-full border rounded-lg px-3 py-2 mt-1 mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                        <label className="text-sm text-gray-500">New Password</label>
                        <input
                            type="password"
                            className="w-full border rounded-lg px-3 py-2 mt-1 mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                            Change Password
                        </button>
                    </div>
                </div>

                {/* Right Form Section */}
                <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Profile Info */}
                        <h2 className="col-span-full text-lg font-semibold text-gray-800 border-b pb-2">
                            Profile Information
                        </h2>

                        <div>
                            <label className="text-sm text-gray-500">Username</label>
                            <input
                                type="text"
                                placeholder="gene.rodrig"
                                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="text-sm text-gray-500">First Name</label>
                            <input
                                type="text"
                                placeholder="Gene"
                                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-500">Nickname</label>
                            <input
                                type="text"
                                placeholder="Gener"
                                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="text-sm text-gray-500">Role</label>
                            <select className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                                <option>Subscriber</option>
                                <option>Admin</option>
                                <option>Editor</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-sm text-gray-500">Last Name</label>
                            <input
                                type="text"
                                placeholder="Rodriguez"
                                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="text-sm text-gray-500">Display Name Publicly as</label>
                            <input
                                type="text"
                                placeholder="Gene"
                                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        {/* Contact Info */}
                        <h2 className="col-span-full text-lg font-semibold text-gray-800 border-b pb-2 mt-6">
                            Contact Info
                        </h2>

                        <div>
                            <label className="text-sm text-gray-500">Email (required)</label>
                            <input
                                type="email"
                                placeholder="gene.rodrig@gmail.com"
                                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="text-sm text-gray-500">WhatsApp</label>
                            <input
                                type="text"
                                placeholder="@gene-rod"
                                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-500">Website</label>
                            <input
                                type="url"
                                placeholder="gene-rodrig.webflow.io"
                                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="text-sm text-gray-500">Telegram</label>
                            <input
                                type="text"
                                placeholder="@gene-rod"
                                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        {/* About */}
                        <h2 className="col-span-full text-lg font-semibold text-gray-800 border-b pb-2 mt-6">
                            About the User
                        </h2>

                        <div className="col-span-full">
                            <label className="text-sm text-gray-500">Biographical Info</label>
                            <textarea
                                rows="4"
                                placeholder="Albert Einstein was a German mathematician..."
                                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
