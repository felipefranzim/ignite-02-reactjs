import { Play } from "phosphor-react";
import { CountdownContainer, CountdownSeparator, FormContainer, HomeContainer, MinutesInput, StartButton, TaskInput } from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useState } from "react";
import { set } from "zod/v4";

const timerValidationSchema = zod.object({
    task: zod.string().min(1, "Informe a tarefa"),
    minutes: zod.number()
                .min(5, "O ciclo deve ser de no mínimo 5 minutos")
                .max(60, "O ciclo deve ser no máximo de 60 minutos")
});

type TimerFormData = zod.infer<typeof timerValidationSchema>;

interface Cycle {
    id: string;
    task: string;
    minutes: number;
}

export function Home() {
    const [cycles, setCycles] = useState<Cycle[]>([]);
    const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
    const [secondsPassed, setSecondsPassed] = useState<number>(0);

    const { register, handleSubmit, watch, reset } = useForm<TimerFormData>({
        resolver: zodResolver(timerValidationSchema),
        defaultValues: {
            task: '',
            minutes: 5
        }
    });

    const task = watch('task');
    const activeCycle = cycles.find(cycle => cycle.id === activeCycleId);
    const secods = activeCycle ? activeCycle.minutes * 60 : 0;
    const currentSeconds = activeCycle ? secods - secondsPassed : 0;

    const minutesLeft = String(Math.floor(currentSeconds / 60)).padStart(2, "0");
    const secondsLeft = String(currentSeconds % 60).padStart(2, "0");

    const submitTask = (data: TimerFormData) => {
        const newCycle: Cycle = {
            id: String(new Date().getTime()), // Unique ID based on timestamp
            task: data.task,
            minutes: data.minutes
        }
        
        setCycles((prevCycles) => [...prevCycles, newCycle]);
        setActiveCycleId(newCycle.id);
        reset();
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
                    <span>{minutesLeft[0]}</span>
                    <span>{minutesLeft[1]}</span>
                    <CountdownSeparator>:</CountdownSeparator>
                    <span>{secondsLeft[0]}</span>
                    <span>{secondsLeft[1]}</span>
                </CountdownContainer>

                <StartButton disabled={!task} type="submit">
                    <Play size={24} />
                    Começar
                </StartButton>
            </form>
        </HomeContainer>
    )
}