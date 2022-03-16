<script>
    import { useMachine } from '@xstate/svelte';
    import { createMachine } from 'xstate';
  
    const toggleMachine = createMachine({
      id: 'toggle',
      initial: 'inactive',
      states: {
        inactive: {
          on: { TOGGLE: 'active' }
        },
        active: {
          on: { TOGGLE: 'inactive' }
        },
      }
    });
  
    const { state, send } = useMachine(toggleMachine);
  </script>
  
  <button class="flex bg-green-500" on:click={() => send('TOGGLE')}>
    {$state.value === 'inactive'
      ? 'off'
      : 'on'}
  </button>