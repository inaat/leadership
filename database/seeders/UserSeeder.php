<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::create([
            'name'  => 'Brijesh',
            'email' =>  'admin@admin.com',
            'role_id' => 1,
            'password' => Hash::make('password'),
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
        // factory(User::class, 4)->create();

        // factory(User::class)->create([
        //     'first_name' => 'Admin',
        //     'last_name' => 'Admin',
        //     'email' => 'admin@admin.com',
        //     'role_id' => 1,
        // ]);

        // factory(User::class)->create([
        //     'first_name' => 'Editor',
        //     'last_name' => 'Editor',
        //     'email' => 'editor@editor.com',
        //     'role_id' => 2,
        // ]);

        // factory(User::class)->create([
        //     'first_name' => 'Viewer',
        //     'last_name' => 'Viewer',
        //     'email' => 'viewer@viewer.com',
        //     'role_id' => 3,
        // ]);
    }
}
