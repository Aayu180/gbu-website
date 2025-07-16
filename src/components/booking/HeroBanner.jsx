import * as React from "react";

// ✅ Simple cn helper
function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}

// ✅ Slot implementation
const Slot = React.forwardRef(({ children, ...props }, ref) =>
  React.cloneElement(children, { ref, ...props })
);
Slot.displayName = "Slot";

// ✅ Minimal cva function
function cva(base, config) {
  return ({ variant, size, className } = {}) => {
    const variantClass = variant ? config.variants.variant[variant] : "";
    const sizeClass = size ? config.variants.size[size] : "";
    return cn(base, variantClass, sizeClass, className);
  };
}

// ✅ Button variants
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        primary: "bg-blue-600 text-white hover:bg-blue-900",
        secondary: "border border-white text-white hover:bg-white hover:text-blue-700",
      },
      size: {
        default: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

// ✅ Button component
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, href, ...props }, ref) => {
    const Comp = asChild ? Slot : "a";
    return (
      <Comp
        href={href}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// ✅ HeroBanner
const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-900 text-white py-20 flex items-center justify-center">
      {/* Decorative circles */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>

      {/* Subtle overlay for extra depth */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 animate-fade-in drop-shadow-md">
          Facility Booking Portal
        </h1>
        <p className="text-lg md:text-2xl mb-10 text-white/80 max-w-3xl mx-auto animate-fade-in delay-100">
          Reserve auditoriums, conference halls, and other campus spaces at Gautam Buddha University in just a few clicks.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in delay-200">
          <Button
            href="/booking"
            variant="primary"
            size="lg"
            className="shadow-xl"
          >
            Browse Facilities
          </Button>
          <Button
            href="/availability"
            variant="secondary"
            size="lg"
            className="shadow-xl"
          >
            Check Availability
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
