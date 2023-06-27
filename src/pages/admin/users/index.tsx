import withAdminLayout from "@/components/common/admin/withAdminLayout";
import Role from "@/components/admin/users/Role";
import Status from "@/components/admin/users/Status";
import { BsFillTrash3Fill } from "react-icons/bs";
import Head from "next/head";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Pagination from "@/components/common/admin/Pagination";
import SearchBar from "@/components/common/admin/SearchBar";
import DropDown from "@/components/common/admin/DropDown";

const routes = {
  commuter: "/admin/users/commuter/",
  driver: "/admin/users/driver/",
};
type UsersProps = {};

const Users = (props: UsersProps) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const [role, setRole] = useState("all");
  const [status, setStatus] = useState("all");

  return (
    <div>
      <Head>
        <title>Users</title>
      </Head>
      <section className="container px-4 mx-auto">
        <div className="flex w-full justify-evenly my-6">
          <SearchBar setQuery={setQuery} />
          <DropDown
            label="Role"
            options={["all", "commuter", "driver", "admin"]}
            setValue={setRole}
          />
          <DropDown
            label="Status"
            options={
              role === "driver"
                ? ["all", "active", "idle", "pending", "rejected"]
                : ["all", "active", "idle"]
            }
            setValue={setStatus}
          />
        </div>
        <div className="flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <div className="flex items-center gap-x-3">
                          <span>Name</span>
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Email address
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Phone Number
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Role</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Status</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700">
                    {Array.from({ length: 15 }).map((_, index) => (
                      <tr
                        key={index}
                        className="hover:bg-primary hover:bg-opacity-10 border cursor-pointer"
                        onClick={() =>
                          router.push(`${routes["commuter"]}${index}`)
                        }
                      >
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center gap-x-3">
                            <div className="flex items-center gap-x-2">
                              <img
                                className="object-cover w-10 h-10 rounded-full"
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                alt=""
                              />
                              <div>
                                <h2 className="font-medium text-gray-800 dark:text-white ">
                                  Arthur Melo
                                </h2>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          authurmelo@example.com
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          +251953685425
                        </td>

                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-2">
                            {index % 2 === 0 ? (
                              <Role role="commuter" />
                            ) : index % 3 === 0 ? (
                              <Role role="driver" />
                            ) : (
                              <Role role="admin" />
                            )}
                          </div>
                        </td>
                        <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          {index % 2 === 0 ? (
                            <Status status="active" />
                          ) : (
                            <Status status="idle" />
                          )}
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <button className=" focus:outline-none">
                            <BsFillTrash3Fill
                              size={20}
                              className="transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 text-primary"
                            />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={11}
        />
      </section>
    </div>
  );
};

export default withAdminLayout(Users);
