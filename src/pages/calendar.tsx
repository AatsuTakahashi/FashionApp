import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import jaLocale from "@fullcalendar/core/locales/ja";
// import interactionPlugin from "@fullcalendar/interaction";
import styles from "@/styles/components/layouts/calender.module.css";
// import Link from "next/link";

export default function calendar() {
  return (
    <div className={styles.calendar}>
      <FullCalendar
        plugins={[dayGridPlugin]}
        locale={jaLocale}
        headerToolbar={{
          start: "prevYear,nextYear",
          center: "title",
          end: "today prev,next",
        }}
      />
    </div>
  );
}
