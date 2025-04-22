import { ChevronDown } from "lucide-react";
import AnnouncementItems from "./AnnouncementItems";

export default function Announcement() {
  return (
    <div className="bg-gray-100 rounded-md w-full px-5 space-y-2 my-5 py-5">
      <header className="flex justify-between items-center px-5">
        <div className="flex justify-center items-center gap-1">
          <ChevronDown />
          <h1 className="text-xl font-bold">Current Announcements (4)</h1>
        </div>
      </header>
      <div className="bg-base-100 border-2 border-gray-200 rounded-xl px-5 py-3 mx-3">
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Message Summary</th>
            </tr>
          </thead>
          <tbody>
            <AnnouncementItems
              title={"Live Q&A Session Tomorrow!"}
              date={"Oct 10, 2024"}
              messageSummary={
                "Join us for a live Q&A on October 11th to discuss module 3"
              }
            />
            <AnnouncementItems
              title={"Assignment 1 Deadline Reminder"}
              date={"Oct 10, 2024"}
              messageSummary={
                "Reminder: The first assignment is due on October 15, 2024"
              }
            />
            <AnnouncementItems
              title={"New Module Released: Instagram"}
              date={"Oct 10, 2024"}
              messageSummary={
                "Module 2 on Instagram marketing is now available"
              }
            />
            <AnnouncementItems
              title={"Course Introduction Webinar"}
              date={"Oct 10, 2024"}
              messageSummary={
                "Catch up with the course introduction on our webinar replay"
              }
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}
