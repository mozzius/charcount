import { component$, useSignal } from "@builder.io/qwik";

import "./app.css";

export const App = component$(() => {
  const len = useSignal(0);

  return (
    <main>
      <h1>character count: {len.value}</h1>
      <textarea
        onInput$={(evt) =>
          (len.value = (evt.target as HTMLTextAreaElement).value.length || 0)
        }
      />
    </main>
  );
});
