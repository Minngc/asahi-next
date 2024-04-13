function computedDataWithUnit(unit: string, ...data: (string | undefined)[]) {
  return (
    data.reduce((prev, current) => {
      console.log();
      return current === undefined
        ? prev
        : prev + Number(current?.split(unit)[0]);
    }, 0) + "px"
  );
}

export { computedDataWithUnit };
