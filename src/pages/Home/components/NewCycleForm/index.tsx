import { useContext } from 'react';
import { FormContainer, TaskInput, MinutesAmountInput } from './styles';
import { useFormContext } from 'react-hook-form';
import * as zod from 'zod';
import { CyclesContext } from '../../../../contexts/CyclesContexts';

function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Carlin" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        min={1}
        max={60}
        disabled={!!activeCycle}
        step={5}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  );
}

export { NewCycleForm };
