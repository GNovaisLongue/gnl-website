"use client";

import { useState } from "react";
import Link from "next/link";
import { User } from "next-auth";
import { useSelectedLayoutSegment } from "next/navigation";

import clsx from "clsx";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

import { Sidebar } from "primereact/sidebar";
import NavBar from "../header/navbar";
import { paths, type Item, USER_ROLES } from "../../lib/utils/pages-map";
import { classNames } from "primereact/utils";

interface Props {
  headerTitle: string;
  user: User | undefined;
}

export default function GlobalNav({ headerTitle, user }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  const userRole: string = user?.role ?? "unauthenticated";

  return (
    //lg:bottom-0 lg:z-auto lg:w-64 lg:border-b-0 lg:border-r lg:border-gray-800
    <header className="fixed top-0 z-10 flex w-full flex-col border-b border-gray-800 bg-black ">
      {/* lg:h-auto */}
      <div className="flex h-12 items-center px-4 py-4 bg-gray-800">
        <div className="flex w-full items-center max-w-screen-xl mr-5">
          <button
            type="button"
            // lg:hidden
            // group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 pb-1
            className="group flex h-14 items-center gap-x-2 px-4 pb-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="block w-6 text-gray-400" />
            ) : (
              <Bars3Icon className="block w-6 text-gray-400" />
            )}
          </button>
          <Link
            href="/"
            // className="group flex w-full items-center gap-x-2.5"
            className="group flex items-center"
            onClick={close}
          >
            <section className="h-7 w-7 rounded-full border border-white/30 group-hover:border-white/50 flex items-center justify-center">
              <div className="h-4 w-4 rounded-full bg-gray-300 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              </div>
            </section>
            <h3 className="font-semibold tracking-wide text-gray-400 group-hover:text-gray-50">
              {headerTitle}
            </h3>
          </Link>
        </div>
        <NavBar user={user} />
      </div>
      {/* <Sidebar
        position="left"
        visible={isOpen}
        onHide={close}
        ptOptions={{ mergeSections: true }} //requiered to customized Prime components
        pt={{
          header: {
            className: classNames("flex items-center", "p-5"),
          },
          // closeButton: {
          //   className: classNames(
          //     "flex items-center justify-center overflow-hidden relative",
          //     "w-8 h-8 text-gray-500 border-0 bg-transparent rounded-full transition duration-200 ease-in-out mr-2 last:mr-0",
          //     "hover:text-gray-700 hover:border-transparent hover:bg-gray-200",
          //     "focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]", // focus
          //     "dark:hover:text-white/80 dark:hover:text-white/80 dark:hover:border-transparent dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]"
          //   ),
          // },
          // closeIcon: {
          //   className: classNames("w-4 h-4 inline-block"),
          // },
          // content: {
          //   className: classNames(
          //     "p-5 pt-0 h-full w-full",
          //     "grow overflow-y-auto"
          //   ),
          // },
        }}
      >
        <nav>
          {paths
            .filter((section) => {
              return (
                USER_ROLES.indexOf(section.role) <= USER_ROLES.indexOf(userRole)
              );
            })
            .map((section) => {
              return (
                <section key={section.name}>
                  <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400/80">
                    <div className="cursor-default">{section.name}</div>
                  </div>

                  <div className="space-y-1">
                    {section.items
                      .filter((section) => {
                        return (
                          USER_ROLES.indexOf(section.role) <=
                          USER_ROLES.indexOf(userRole)
                        );
                      })
                      .map((item) => (
                        <GlobalNavItem
                          key={item.slug}
                          item={item}
                          close={close}
                        />
                      ))}
                  </div>
                </section>
              );
            })}
        </nav>
      </Sidebar> */}

      <section
        // lg:static lg:block
        className={clsx(
          "overflow-y-auto transition-transform duration-300 ease-in-out",
          {
            "fixed inset-y-0 left-0 w-56 bg-black transform translate-x-0":
              isOpen,
            hidden: !isOpen,
          }
        )}
      >
        <div
          className={clsx({
            "flex h-12 items-center px-4 py-4 bg-gray-800": isOpen,
          })}
        >
          <button
            type="button"
            // lg:hidden
            // group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 pb-1
            className="group flex h-14 items-center gap-x-2 px-4 pb-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="block w-6 text-gray-400" />
            ) : (
              <Bars3Icon className="block w-6 text-gray-400" />
            )}
          </button>
        </div>
        <nav className="space-y-6 px-2 pb-5 pt-5">
          {paths
            .filter((section) => {
              return (
                USER_ROLES.indexOf(section.role) <= USER_ROLES.indexOf(userRole)
              );
            })
            .map((section) => {
              return (
                <section key={section.name}>
                  <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400/80">
                    <div className="cursor-default">{section.name}</div>
                  </div>

                  <div className="space-y-1">
                    {section.items
                      .filter((section) => {
                        return (
                          USER_ROLES.indexOf(section.role) <=
                          USER_ROLES.indexOf(userRole)
                        );
                      })
                      .map((item) => (
                        <GlobalNavItem
                          key={item.slug}
                          item={item}
                          close={close}
                        />
                      ))}
                  </div>
                </section>
              );
            })}
        </nav>
      </section>
    </header>
  );
}

function GlobalNavItem({
  item,
  close,
}: {
  item: Item;
  close: () => false | void;
}) {
  const segment = useSelectedLayoutSegment();
  const isActive = item.slug === segment;

  return (
    <Link
      onClick={close}
      href={`/${item.slug}`}
      className={clsx(
        "block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300",
        {
          "text-gray-400 hover:bg-gray-800": !isActive,
          "text-white": isActive,
        }
      )}
    >
      {item.name}
    </Link>
  );
}
