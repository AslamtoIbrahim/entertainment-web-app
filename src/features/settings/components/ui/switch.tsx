type SwitchProp = {
  isOn: boolean;
  onSwitchClick: () => void;
};
function Switch({ isOn, onSwitchClick }: SwitchProp) {
  return (
    <div
      onClick={onSwitchClick}
      className={`bg-foreground w-12 cursor-pointer rounded-lg p-1`}
    >
      <div
        className={`size-5 rounded-full transition-all duration-300 ease-in-out ${isOn ? "bg-primary translate-x-0" : "bg-chart-4 translate-x-5"} `}
      />
    </div>
  );
}

export default Switch;
