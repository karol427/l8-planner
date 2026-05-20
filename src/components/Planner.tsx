import FullCalendar from '@fullcalendar/react'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import interactionPlugin from '@fullcalendar/interaction'
import { resources, events } from '../data/mock'

export default function Planner() {
  return (
    <FullCalendar
      plugins={[resourceTimelinePlugin, interactionPlugin]}
      initialView="resourceTimelineWeek"
      editable={true}
      selectable={true}
      resourceAreaWidth="240px"
      height="auto"
      resources={resources}
      events={events}
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'resourceTimelineDay,resourceTimelineWeek,resourceTimelineMonth'
      }}
    />
  )
}