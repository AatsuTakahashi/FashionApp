import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import jaLocale from "@fullcalendar/core/locales/ja";
// import interactionPlugin from "@fullcalendar/interaction";
import styles from "@/styles/components/layouts/Hoge.module.css";

export default function Hoge() {
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
