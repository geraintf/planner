import mongoose from 'mongoose';
import chalk from 'chalk';

export async function dbConnect() {
  const dbUri = process.env.MONGODB_URI;

  if (!dbUri) {
    throw new Error('No DB uri found');
  }

  mongoose.connect(dbUri)
    .then(
      () => {
        console.log(`  ${chalk.yellow('============')} DB Connected. ${chalk.yellow('============')}`);
      },
      (err) => { console.error(err); }
    );
}
