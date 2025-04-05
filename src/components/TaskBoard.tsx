import { Badge, Flex, Grid, ScrollArea } from "@radix-ui/themes";
import { Task } from "../entities/Task";
import { TaskCard } from "./TaskCard"
import { useEffect, useState } from "react";
import { tasksService } from "../Services/api";

export const TaskBoard: React.FC = () => {
  

  const tasksTodo: Task[] = tasks?.filter((t) => t.status === "todo") ?? []
  const tasksInProgress: Task[] = tasks?.filter((t) => t.status === "doing") ?? []
  const tasksDone: Task[] = tasks?.filter((t) => t.status === "done") ?? []

  return (
    
    <ScrollArea scrollbars="horizontal">
        <Grid columns={"3"} gap={"4"} minWidth={"64rem"} mt={"3"}>
          <Flex direction={"column"} gap={"4"}>
            <Badge size={"3"} color="gray">
              Para Fazer {tasksTodo.length}
            </Badge>
            {tasksTodo.map((task) => (<TaskCard key={task.id} task={task} />))}
          </Flex>
          <Flex direction={"column"} gap={"4"}>
            <Badge size={"3"} color="yellow">
              Em Progresso {tasksInProgress.length}
            </Badge>
            {tasksInProgress.map((task) => (<TaskCard key={task.id} task={task} />))}
          </Flex>
          <Flex direction={"column"} gap={"4"}>
            <Badge size={"3"} color="green">
              Concluidas {tasksDone.length}
            </Badge>
            {tasksDone.map((task) => (<TaskCard key={task.id} task={task} />))}
          </Flex>
        </Grid>
    </ScrollArea>
  );
};
