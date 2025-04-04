import { Badge, Flex, Grid, ScrollArea } from "@radix-ui/themes";
import { Task } from "../entities/Task";
import { TaskCard } from "./TaskCard"

export const TaskBoard: React.FC = () => {
  const tasksTodo: Task[] = [
    
  ];
  const tasksInProgress: Task[] = [
   
  ];
  const tasksDone: Task[] = [
    
  ];

  return (
    
    <ScrollArea scrollbars="horizontal">
        <Grid columns={"3"} gap={"4"} minWidth={"64rem"} mt={"3"}>
          <Flex direction={"column"} gap={"4"}>
            <Badge size={"3"} color="gray">
              Para Fazer (2)
            </Badge>
            {tasksTodo.map((task) => (<TaskCard key={task.id} task={task} />))}
          </Flex>
          <Flex direction={"column"} gap={"4"}>
            <Badge size={"3"} color="yellow">
              Em Progresso (2)
            </Badge>
            {tasksInProgress.map((task) => (<TaskCard key={task.id} task={task} />))}
          </Flex>
          <Flex direction={"column"} gap={"4"}>
            <Badge size={"3"} color="green">
              Concluidas (2)
            </Badge>
            {tasksDone.map((task) => (<TaskCard key={task.id} task={task} />))}
          </Flex>
        </Grid>
    </ScrollArea>
  );
};
