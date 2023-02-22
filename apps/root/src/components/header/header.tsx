import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
        <header>
            <nav
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
            </nav>
        </header>
    );
});
