"use client";
import { Card } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";
import { User } from "@nextui-org/user";
import {
  Phone,
  Mail,
  Pin,
  Building,
  Map,
  MapPin,
  Calendar,
  User2,
  Captions,
  CalendarDays,
} from "lucide-react";
import React from "react";
import { columns, users } from "../../dashboard/data";
import { Chip, ChipProps } from "@nextui-org/chip";
import { Tooltip } from "@nextui-org/tooltip";
import { DeleteIcon, EditIcon, EyeIcon } from "@/components/icons";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";

const statusColorMap: Record<string, ChipProps["color"]> = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

type User = (typeof users)[0];

export default function UserProfile() {
  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: user.avatar }}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">
              {user.team}
            </p>
          </div>
        );
      case "status":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[user.status]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <div className="flex flex-col w-full h-full">
      <Card className="w-full shadow-lg p-6 rounded-lg">
        <div className="flex flex-col md:flex-row w-full">
          <div className="w-80">
            <User
              name="Junior Garcia"
              description={
                <Link href="#" size="sm" isExternal>
                  @jrgarciadev
                </Link>
              }
              avatarProps={{
                src: "/user.jpg",
                className: "w-24 h-24 object-cover rounded-lg",
              }}
            />
            <h3 className="mt-8 mb-5">About</h3>
            <div className="flex flex-row gap-2 text-gray-600 dark:text-gray-400 m-3 text-sm">
              <Phone className="w-4 h-4" />
              <span className="text-gray-600 dark:text-gray-400">Phone:</span>
              <p className="text-black dark:text-white">+917784569366</p>
            </div>
            <div className="flex flex-row gap-2 text-gray-600 dark:text-gray-400 m-3 text-sm">
              <Mail className="w-4 h-4" />
              <span className="text-gray-600 dark:text-gray-400">Email:</span>
              <p className="text-black dark:text-white">sample@email.com</p>
            </div>
            <Divider className="my-5 w-6/3 mx-auto" />
            <h3 className="mt-8 mb-5">Address</h3>
            <div className="flex flex-row gap-2 text-gray-600 dark:text-gray-400 m-3 text-sm">
              <Map className="w-4 h-4" />
              <span className="text-gray-600 dark:text-gray-400">Address:</span>
              <p className="text-black dark:text-white">
                390 Market Street, suit 200
              </p>
            </div>
            <div className="flex flex-row gap-2 text-gray-600 dark:text-gray-400 m-3 text-sm">
              <Building className="w-4 h-4" />
              <span className="text-gray-600 dark:text-gray-400">
                City State:
              </span>
              <p className="text-black dark:text-white">San francisco CS</p>
            </div>
            <div className="flex flex-row gap-2 text-gray-600 dark:text-gray-400 m-3 text-sm">
              <MapPin className="w-4 h-4" />
              <span className="text-gray-600 dark:text-gray-400">
                Postcode:
              </span>
              <p className="text-black dark:text-white">94102</p>
            </div>
            <Divider className="my-5 w-6/3 mx-auto" />
            <h3 className="mt-8 mb-5">Employee Details</h3>
            <div className="flex flex-row gap-2 text-gray-600 dark:text-gray-400 m-3 text-sm">
              <Calendar className="w-4 h-4" />
              <span className="text-gray-600 dark:text-gray-400">
                Date of borth:
              </span>
              <p className="text-black dark:text-white">Sep 26, 1988</p>
            </div>
            <div className="flex flex-row gap-2 text-gray-600 dark:text-gray-400 m-3 text-sm">
              <User2 className="w-4 h-4" />
              <span className="text-gray-600 dark:text-gray-400">
                National ID:
              </span>
              <p className="text-black dark:text-white">25632589</p>
            </div>
            <div className="flex flex-row gap-2 text-gray-600 dark:text-gray-400 m-3 text-sm">
              <Captions className="w-4 h-4" />
              <span className="text-gray-600 dark:text-gray-400">Title:</span>
              <p className="text-black dark:text-white">Project Manager</p>
            </div>
            <div className="flex flex-row gap-2 text-gray-600 dark:text-gray-400 m-3 text-sm">
              <CalendarDays className="w-4 h-4" />
              <span className="text-gray-600 dark:text-gray-400">
                Joined Date:
              </span>
              <p className="text-black dark:text-white">Jan 05, 2023</p>
            </div>
          </div>
          <Divider className="hidden md:flex" orientation="vertical" />
          <Divider className="md:hidden flex" orientation="horizontal" />
          {/* Show other details below */}
          <div className="flex flex-col h-full w-full md:m-0 m-2 md:p-7">
            <h3 className="p-2 font-semibold">Bookings</h3>
            <Table aria-label="Example table with custom cells">
              <TableHeader columns={columns}>
                {(column) => (
                  <TableColumn
                    key={column.uid}
                    align={column.uid === "actions" ? "center" : "start"}
                  >
                    {column.name}
                  </TableColumn>
                )}
              </TableHeader>
              <TableBody items={users}>
                {(item) => (
                  <TableRow key={item.id}>
                    {(columnKey) => (
                      <TableCell>{renderCell(item, columnKey)}</TableCell>
                    )}
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <Divider className="my-5 w-6/3 mx-auto" />
        </div>
      </Card>
    </div>
  );
}
