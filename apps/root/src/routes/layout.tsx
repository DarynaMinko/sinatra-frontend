import { component$, Slot } from "@builder.io/qwik";
import { loader$ } from "@builder.io/qwik-city";

export const serverTimeLoader = loader$(() => {
    return {
        date: new Date().toISOString()
    };
});

export default component$(() => {
    return (
        <>
            <main>
                <div
                    class={`container mx-auto flex bg-green-300 justify-between min-h-[40px] items-center`}
                >
                    <div class={`flex space-x-6`}>
                        <div>back | forward</div>
                        <input type="text" class={`bg-red-300 rounded-2xl`} />
                    </div>
                    <div>
                        <a class={`text-green-600`} href="/">
                            Home
                        </a>
                        <a class={`text-green-600`} href="/about">
                            About
                        </a>
                    </div>
                </div>
                <section>
                    <Slot />
                </section>
            </main>
            <footer>this is a footer</footer>
        </>
    );
});
