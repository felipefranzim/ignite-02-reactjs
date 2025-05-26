import { Play } from "phosphor-react";
import { CountdownContainer, CountdownSeparator, FormContainer, HomeContainer, MinutesInput, StartButton, TaskInput } from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

const timerValidationSchema = zod.object({
    task: zod.string().min(1, "Informe a tarefa"),
    minutes: zod.number()
                .min(5, "O ciclo deve ser de no mínimo 5 minutos")
                .max(60, "O ciclo deve ser no máximo de 60 minutos")
});

type TimerFormData = zod.infer<typeof timerValidationSchema>;

export function Home() {
    const { register, handleSubmit, watch } = useForm<TimerFormData>({
        resolver: zodResolver(timerValidationSchema),
        defaultValues: {
            task: '',
            minutes: 5
        }
    });

    const task = watch('task');

    const submitTask = (data: TimerFormData) => {
        console.log(data);
        // Aqui você pode adicionar a lógica para iniciar a contagem regressiva
        // e armazenar a tarefa no estado ou contexto global, se necessário.
    }

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(submitTask)}>
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput id="task" 
                               list="task-suggestions" 
                               placeholder="nome da task a ser executada"
                               {...register("task")} />
                    <datalist id="task-suggestions">
                        <option value="Estudar React" />
                        <option value="Estudar TypeScript" />
                    </datalist>

                    <label htmlFor="minutes">durante</label>
                    <MinutesInput id="minutes" 
                                  placeholder="00" 
                                  type="number" 
                                  step={5} min={5} max={60}
                                  {...register("minutes", { valueAsNumber: true })} />

                    <span>minutos.</span>
                </FormContainer>
                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <CountdownSeparator>:</CountdownSeparator>
                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>

                <StartButton disabled={!task} type="submit">
                    <Play size={24} />
                    Começar
                </StartButton>
            </form>
        </HomeContainer>
    )
}