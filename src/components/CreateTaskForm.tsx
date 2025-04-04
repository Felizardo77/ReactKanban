import {
  Dialog,
  Button,
  Flex,
  Box,
  Text,
  TextField,
  TextArea,
  RadioGroup,
  Badge,
} from "@radix-ui/themes";
import { PlusIcon } from "@radix-ui/react-icons";
import { FormEventHandler } from "react";
import { z } from "zod";

const CreateTaskSchema = z.object({
  title: z.string(),
  description: z.string(),
  status: z.enum(["todo", "doing", "done"]),
  priority: z.enum(["low", "medium", "high"]),
});

export const CreateTaskForm: React.FC = () => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.currentTarget);
    const title = formData.get("title");
    const description = formData.get("description");
    const status = formData.get("status");
    const priority = formData.get("priority");
    ev.currentTarget.reset();

    const taskData = CreateTaskSchema.parse({title, description, status, priority})
    alert(JSON.stringify(taskData))
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>
          <PlusIcon /> Nova Tarefa
        </Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="32rem">
        <Dialog.Title>Nova Tarefa</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Adicione novas tarefas a lista
        </Dialog.Description>

        <form onSubmit={handleSubmit}>
          <Flex direction="column" gap="4">
            <Box maxWidth="32rem">
              <Box mb="2">
                <Text as="label" htmlFor="title">
                  Titulo
                </Text>
              </Box>
              <TextField.Root
                placeholder="Defina um Titulo"
                name="title"
                id="title"
                autoFocus
                required
              />
            </Box>
            <Box maxWidth="32rem">
              <Box mb="2">
                <Text as="label" htmlFor="description">
                  Descricao da tarefa
                </Text>
              </Box>
              <TextArea
                placeholder="Defina a tarefa"
                name="description"
                id="description"
                required
              />
            </Box>
            <Flex gap={"8"}>
              <Box>
                <Text as="div" mb={"2"}>
                  Situacao
                </Text>
                <RadioGroup.Root name="status" defaultValue="todo">
                  <RadioGroup.Item value="todo">
                    <Badge color="gray">Para Fazer</Badge>
                  </RadioGroup.Item>
                  <RadioGroup.Item value="doing">
                    <Badge color="yellow">Em andamento</Badge>
                  </RadioGroup.Item>
                  <RadioGroup.Item value="done">
                    <Badge color="green">Concluido</Badge>
                  </RadioGroup.Item>
                </RadioGroup.Root>
              </Box>

              <Box>
                <Text as="div" mb={"2"}>
                  Situacao
                </Text>
                <RadioGroup.Root name="priority" defaultValue="todo">
                  <RadioGroup.Item value="low">
                    <Badge color="sky">Baixa</Badge>
                  </RadioGroup.Item>
                  <RadioGroup.Item value="medium">
                    <Badge color="amber">Media</Badge>
                  </RadioGroup.Item>
                  <RadioGroup.Item value="high">
                    <Badge color="tomato">Alta</Badge>
                  </RadioGroup.Item>
                </RadioGroup.Root>
              </Box>
            </Flex>

            <Flex gap="2" justify="end">
              <Dialog.Close>
                <Button color="gray" variant="soft">
                  Cancelar
                </Button>
              </Dialog.Close>
              <Button type="submit">Criar Tarefa</Button>
            </Flex>
          </Flex>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
};
