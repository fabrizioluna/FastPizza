import mongoose from 'mongoose';

declare var process: {
  env: {
    DB_CNN: string;
  };
};

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN);
    // console.info(chalk.blue('[Info]'), 'Database: Successful Connection');
    console.log('         Database: Successful Connection');
  } catch (error) {
    console.log(error);
    throw new Error('         Error: Database no connection');
  }
};
