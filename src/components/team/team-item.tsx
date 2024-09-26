"use client"

import { Member } from "@/types/member"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TeamComboBox } from "./team-combobox"
import { useState } from "react"

type Props = {
  data: Member
}

export function TeamItem({ data }: Props) {
  const [role, setRole] = useState(data.role)
  return (
    <div className="flex gap-4 items-center">
      <div>
        <Avatar>
          <AvatarImage src={data.avatar} />
          <AvatarFallback></AvatarFallback>
        </Avatar>
      </div>
      <div className="flex-1 overflow-x-hidden">
        <div className="truncate">{data.name}</div>
        <div className="truncate text-sm text-muted-foreground">{data.email}</div>
      </div>
      <div>
        <TeamComboBox value={role} setValue={setRole}/>
      </div>
    </div>
  )
}