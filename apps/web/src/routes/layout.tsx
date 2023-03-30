import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
    return (
        <>
            <main>
                <div class="container mx-auto flex bg-green-300 justify-end min-h-[40px] items-center">
                    <div>
                        <input type="text" class="bg-red-300 rounded-2xl" />
                        <a class="text-green-600" href="/">
                            Home
                        </a>
                        <a class="text-green-600" href="/about">
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
